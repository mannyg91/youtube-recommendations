import {useEffect, useState, useRef} from 'react'

// can call useHover on any components that 
function useHover() {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)

    function enter() {
        setHovered(true)
    }

    function leave() {
        setHovered(false)
        
    }

    // console.log(hovered)

    useEffect(()=>{
        // accesses DOM node to add listener
        ref.current.addEventListener("mouseenter", enter)
        ref.current.addEventListener("mouseleave", leave)


        //produces error:
        // return () => {
        //     ref.current.removeEventListener("mouseenter", enter)
        //     ref.current.removeEventListener("mouseleave", leave)
        // }
    }, [])

    return [hovered, ref]
}

export { useHover };