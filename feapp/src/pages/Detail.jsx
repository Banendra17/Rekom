// src/pages/Detail.jsx

import React from 'react';

const Detail = () => {
  return (
    <div className="p-4">
      <div className="mb-4">
        <img
          src="https://via.placeholder.com/400x200"
          alt="Placeholder"
          className="w-full h-auto"
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Place Description</h2>
        <p className="text-lg mb-4 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna id massa suscipit, 
          non facilisis velit dignissim. Mauris suscipit, quam ac malesuada finibus, ipsum lacus vehicula velit, 
          sit amet ultricies mauris enim nec nulla. Vestibulum id risus at nulla vulputate faucibus. Curabitur eget nulla libero. 
          Cras varius, metus ac fermentum sollicitudin, erat metus viverra eros, et ullamcorper tortor lorem nec metus. Morbi sit amet tincidunt est, 
          ac finibus odio.
        </p>
        <p className="text-lg mb-4 text-justify">
          Proin nec tellus vitae dolor facilisis sagittis vel ac nunc. Praesent scelerisque fermentum orci, 
          in ultricies metus ullamcorper ac. Etiam at condimentum leo, sed fermentum justo. Nulla facilisi. Sed nec urna ut mi vestibulum pulvinar. 
          Sed ut magna vel ligula feugiat congue. Nam euismod nibh quis orci ultricies, ac eleifend lorem suscipit. 
          Quisque nec mauris ac tortor egestas auctor. Fusce nec magna in nisl convallis tristique non ac augue.
        </p>
        <p className="text-lg mb-4 text-justify">
          Suspendisse potenti. Proin luctus, mi sed fermentum posuere, justo urna sollicitudin purus, eget finibus sapien ligula in dui. 
          Donec vitae ex eu sem feugiat sollicitudin ut vel orci. Donec consectetur, dui vel scelerisque fringilla, nisl lacus lacinia nulla, 
          id pretium nulla purus ac tortor. Sed eu ultricies magna. Integer tempus semper mi, at dapibus neque congue nec. 
          Duis condimentum dui eu sapien ultrices venenatis. In sagittis malesuada mi, eget venenatis elit accumsan nec.
        </p>
      </div>
    </div>
  );
};

export default Detail;
