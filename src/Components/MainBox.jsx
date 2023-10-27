// export default function MainBox(){
//     return(
//         <div>
//             Main Box
//         </div>
//     );
// }

// above is option 1, with out children

// eslint-disable-next-line react/prop-types
export default function MainBox({children}) {
    return (
        <div className="mainbx">
            {children}
        </div>
    )
}