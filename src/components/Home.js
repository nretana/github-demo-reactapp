
import styles from './Home.module.scss';

const Home = ()=> {
    return(
        <div className={`container ${styles['home-container']}`}>
            <div className='row justify-content-center align-content-center h-100'>
                <h1 className='fw-bold'>Your Flexible Smart Dashboard</h1>
                <p>Take your next step in your finance activities easily. Save your time!</p>
                <button className='w-auto'>Explore More</button>
            </div>
       </div>
    )
}

export default Home;