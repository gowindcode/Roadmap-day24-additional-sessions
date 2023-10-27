// export default function TopBar(){
//     return(
//         <div>
//             Top Bar
//         </div>
//     );
// }

// above is option 1, with out children

// eslint-disable-next-line react/prop-types
export default function TopBar({children}){
    return(
        <div className="topbr">
            {children}
        </div>
    )
}