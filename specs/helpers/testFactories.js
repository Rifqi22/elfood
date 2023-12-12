import likeButtonInitiator from '../../src/scripts/utils/like-button-initiator';

const createpresenterwithtrestourant = async (data) => {
  const likeButtonContainer = document.querySelector('#likeButtonContainer');
  await likeButtonInitiator.init({
    likeButtonContainer,
    data,
  });
};
export { createpresenterwithtrestourant };