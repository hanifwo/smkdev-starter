// 'use client';
// import { useState } from 'react';
// import { Button, Modal } from 'flowbite-react';

// export default function DefaultModal() {
//   const [openModal, setOpenModal] = useState();
//   const props = { openModal, setOpenModal };

//   return (
//     <>
//     <button onClick={() => setOpenModal(true)}>
//         Sign in
//     </button>
//     <div className={`${openModal ? 'block' : 'hidden'} fixed right-[50%] top-[50%]`}>
//         <div>
//             <header className="grid grid-2 justify-end">
//             <div></div>
//             <div>
//                 <span>Close</span>
//             </div>

//             </header>
//             <div>
//                 <div>
//                     <label htmlFor="">Fullname</label>
//                     <input type="text" />
//                 </div>
//             </div>
//         </div>
//     </div>
//     </>
//   )
// }

