import { useSpring, animated } from 'react-spring'
function NameIntro(){
    const styles = useSpring({
        loop: false,
        from: {x:10000, y:0},
        to: {x:0, y:0},
        delay: 500,
        opacity: 0
    })

    return(
        <animated.p class="text-light medium-font" style={{...styles}}>
            aka Filllykung
        </animated.p>
    )
}

export default NameIntro