import { useSpring, animated } from 'react-spring'
function NameIntro(){
    const styles = useSpring({
        loop: false,
        from: {x:-1000, y:0},
        to: {x:0, y:0},
        delay: 500,
        opacity: 0
    })

    return(
        <animated.p class="text-light" style={{...styles}}>
            <h1 class="big-font">Tharathep Klinla-or</h1>
        </animated.p>
    )
}

export default NameIntro