// export default function SideBar(){
//     return(
//         <div>
//             Side Bar
//         </div>
//     );
// }

// above is option 1, with out children

// eslint-disable-next-line react/prop-types
export default function SideBar({children}) {
    return(
        <div className="sidebr">
            {children}
        </div>
    )
}