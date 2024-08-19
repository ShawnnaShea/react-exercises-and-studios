export default function BookList() {
   let pageTitle = "Books That Are Cool!";
   let book1 = "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1708118432l/195391615._SY475_.jpg";
   let book2 = "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1705382948l/199373502._SY475_.jpg";
   let book3 = "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1699330828l/201751811._SY475_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Humor Me by Cat Shook" />
         <img src={book2} alt="The Color of Everything by Cory Richards" />
         <img src={book3} alt="Girls Who Burn by MK Pagano" />
      </div>      
   );
}