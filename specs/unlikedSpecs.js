import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import favoriteRestaurant from '../src/scripts/data/favorite-restaurants-idb';
import * as factories from './helpers/testFactories';

describe('Batalkan menyukai Restaurant', () => {
  const addbutton = () => {
    document.body.innerHTML = '<div tabindex="0" id="likeButtonContainer"></div>';
  };
  beforeEach(async () => {
    addbutton();
    await favoriteRestaurant.putRestaurant({ id: 1 });
  });
  afterEach(async () => {
    await favoriteRestaurant.deleteRestaurant(1);
  });
  it('Menampilkan model tombol yang tidak seperti restaurant yang telah disukai', async () => {
    await factories.createpresenterwithtrestourant({ id: 1 });
    expect(document.querySelector('[aria-label="batalkan sukai Rastaurant"]')).toBeTruthy();
  });
  it('Menampilkan model tombol yang tidak seperti restaurant yang belum disukai', async () => {
    await factories.createpresenterwithtrestourant({ id: 1 });

    expect(document.querySelector('[aria-label="sukai Restaurant ini"]')).toBeFalsy();
  });
  it('Dapat menghapus Daftar Restaurant yang disukai', async () => {
    await factories.createpresenterwithtrestourant({ id: 1 });

    document.querySelector('[aria-label="batalkan sukai Rastaurant"]').dispatchEvent(new Event('click'));

    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([]);
  });
  it('ketika pengguna mengklik tidak disukai maka seharusnya tidak akan tampil pada daftar resturant yang disukai', async () => {
    await factories.createpresenterwithtrestourant({ id: 1 });

    await favoriteRestaurant.deleteRestaurant(1);

    document.querySelector('[aria-label="batalkan sukai Rastaurant"]').dispatchEvent(new Event('click'));
    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([]);
  });
});
