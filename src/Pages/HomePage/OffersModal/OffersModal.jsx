import PropTypes from 'prop-types';
import { RxCrossCircled } from 'react-icons/rx';

const OffersModal = ({onClose}) => {
    return (
        <div data-aos="fade-up" data-aos-duration="3000" className="fixed inset-0 flex  items-center justify-center bg-opacity-0 z-50">
            <div className="lg:ml-[150px] bg-lime-100 rounded-lg p-4 max-w-md relative">
                <h2 className="text-2xl font-bold text-stone-700 text-center">Today`s offer! Any Booking!! <span className='text-3xl text-yellow-500'> Get 20%</span> discount</h2>
                <p className='text-xl font-mono text-center mb-2 mt-2'>Booking Your Room Now!</p>
                <img className='w-38 rounded' src="https://i.postimg.cc/bJ02g0xj/17.jpg" alt="" />
                <button onClick={onClose} className="text-black text-2xl font-bold py-2 px-2 rounded-full absolute top-0 right-0">
                    <RxCrossCircled />
                </button>
            </div>
        </div>
    );
};

OffersModal.propTypes={
    onClose: PropTypes.func.isRequired,
}

export default OffersModal;