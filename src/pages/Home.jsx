import {motion,AnimatePresence} from 'framer-motion';
import {snapshot, useSnapshot} from 'valtio';
import state from '../store';
import {CustomButton} from '../component';
import {headContainerAnimation,
        headContentAnimation,
        headTextAnimation,
        slideAnimation} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img
            src='./V.png'
            alt="logo"
            className="w-8 h-8 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>

              <h1 className="head-text">
                Yopak <br className="xl: block hidden"/> Men.
              </h1>
            </motion.div>
            <motion.div {...headContentAnimation}
            className="flex flex-col gap-5"
            >
            <p className="max-w-md font-normal text-gray-600 text-base">
              Dri naka mag design og t-shirt kong gi mahalan ka sa imong Graphic Designer.
              <strong> Make your Imagination come to life </strong>{""}
              and define your own style.              
            </p>

            <CustomButton
              type="filled"
              title="Customize It"
              handleClick={ () => state.intro = false}
              customStyles = "w-fit px-4 py-2.5 font-bold text-sm"
              />

           
            </motion.div>
          </motion.div>
          <p className="mt-2 text-gray-500 text-xs truncate">
              @Vince Valientes              
            </p>
        </motion.section>

      )}
    </AnimatePresence>
  )
}

export default Home