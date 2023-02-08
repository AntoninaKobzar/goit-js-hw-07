import { galleryItems } from './gallery-items.js';
// Change code below this line
    const galleryEl=document.querySelector(".gallery");
    const cardsMarkup=createGalleryCardsMarkup(galleryItems);

    galleryEl.insertAdjacentHTML("beforeend",cardsMarkup);
    galleryEl.addEventListener("click",onGalleryItemClick);

    function createGalleryCardsMarkup(gallery) {
    return gallery.map(({preview,original,description}) => {
    return `<li>
        <a class="gallery__item" href="${original}">
        <img src="${preview}" alt="${description}" class="gallery__image">
        </a>
        </li>`;
        })
        .join("");
        }

    function onGalleryItemClick(event) {
        event.preventDefault();
        const lightbox = new SimpleLightbox(".gallery__item", {
            captionDelay:250,
            captionsData:"alt",
        });
        } ;  
    