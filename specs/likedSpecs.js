import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import favoriteRestaurant from '../src/scripts/data/favorite-restaurants-idb';
import * as factories from './helpers/testFactories';

describe('Menyukai Restaurant', () => {
  const addbutton = () => {
    document.body.innerHTML = '<div tabindex="0" id="likeButtonContainer"></div>';
  };
  beforeEach(() => {
    addbutton();
  });
  it('Menampilkan tombol suka ketika Restaurant belum pernah disukai sebelumnya', async () => {
    await factories.createpresenterwithtrestourant({ id: 1 });

    expect(document.querySelector('[aria-label="sukai Restaurant ini"]')).toBeTruthy();
  });
  it('Tidak Menampilkan tombol suka ketika Restaurant belum pernah disukai sebelumnya', async () => {
    await factories.createpresenterwithtrestourant({ id: 1 });

    expect(document.querySelector('[aria-label="batalkan sukai Rastaurant"]')).toBeFalsy();
  });
  it('harus dapat melakukan aksi untuk menyukai Restoran', async () => {
    await factories.createpresenterwithtrestourant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    const data = await favoriteRestaurant.getRestaurant(1);
    expect(data).toEqual({ id: 1 });

    await favoriteRestaurant.deleteRestaurant(1);
  });
  it('Restorant ini sudah disukai', async () => {
    await factories.createpresenterwithtrestourant({ id: 1 });

    await favoriteRestaurant.putRestaurant({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Tidak ada duplikat restauran atau double
    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([{ id: 1 }]);

    await favoriteRestaurant.deleteRestaurant(1);
  });
  it('Dilarang menambahkan Restaurant yang tidak memiliki id', async () => {
    await factories.createpresenterwithtrestourant({});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([]);
  });
});
