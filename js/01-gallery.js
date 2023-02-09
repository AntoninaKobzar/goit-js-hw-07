        import { galleryItems } from './gallery-items.js';
        // Change code below this line


        const galleryContainer=document.querySelector(".gallery");
        const cardsMarkup=createGalleryCardsMarkup(galleryItems);
        galleryContainer.insertAdjacentHTML("beforeend",cardsMarkup);
        galleryContainer.addEventListener("click",onGalleryContainerClick);

        function createGalleryCardsMarkup(galleryItems) {
                return galleryItems.map(({preview,original,description})=>{
                    return `<li>
                <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
            </li>`;
                })
                .join('');
                
            };
            
        function onGalleryContainerClick(event){
        const isGalleryElement=event.target.nodeName;
        event.preventDefault();
        if(!isGalleryElement){
            return;
            }
        const onCloseModal=(event)=>{
        const ESC_KEY="Escape";
            if(event.code===ESC_KEY){
            instance.close();
            }
            };
        const instance = basicLightbox.create(`
            <img src="${event.target.dataset.source}" width="800" height="600">`,
            {
            onShow:(instance)=>{
            document.addEventListener("keydown",onCloseModal);
            },
            onClose:(instance)=>{
            document.removeEventListener("keydown",onCloseModal);
            },
            }
        );
                
            instance.show();
            }
            console.log(galleryItems);
        
        
        

