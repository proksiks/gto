const photoButton = document.querySelector('#news-detail-photo')
const videoButton = document.querySelector('#news-detail-video')
const activeTab = document.querySelector('.news-detail__gallery-items_active')
const hideTab = document.querySelector('.news-detail__gallery-items_hide')

photoButton.addEventListener('click', () => {
  photoButton.classList.toggle('button_red')
  photoButton.classList.toggle('button_gray')

  videoButton.classList.toggle('button_red')
  videoButton.classList.toggle('button_gray')

  activeTab.classList.remove('news-detail__gallery-items_hide')
  activeTab.classList.add('news-detail__gallery-items_active')
  hideTab.classList.remove('news-detail__gallery-items_active')
  hideTab.classList.add('news-detail__gallery-items_hide')
})


videoButton.addEventListener('click', () => {
  photoButton.classList.toggle('button_red')
  photoButton.classList.toggle('button_gray')

  videoButton.classList.toggle('button_red')
  videoButton.classList.toggle('button_gray')

  activeTab.classList.remove('news-detail__gallery-items_active')
  activeTab.classList.add('news-detail__gallery-items_hide')
  hideTab.classList.remove('news-detail__gallery-items_hide')
  hideTab.classList.add('news-detail__gallery-items_active')
})
