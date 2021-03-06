
import styles from './Home.module.scss';

const Home = ()=> {
    return(
        <div className={`container ${styles['home-container']}`}>
            <div className='row justify-content-center align-content-center h-100'>
                <h1 className='fw-bolder'>Your Flexible Smart Dashboard</h1>
                <p className='fw-bolder'>Take your next step with your finance activities easily, Save time!</p>
                <button className='w-auto'>Explore More</button>
            </div>
       </div>
    )
}

export default Home;