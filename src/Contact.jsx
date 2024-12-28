import './Contact.scss';

const Contact = () => {
    return (
        <div className='contact-container'>
            <h3 className='contact-title'> contact </h3>
            <div className='contact-line'></div>
            <div className='contact'> <img src="add.png" alt="" /></div>
            <div className='contact-explaination'>
                <h4 > anthony cailleau </h4>
                <div className='contact-explaination-line'></div>
                <p>anthonycailleau.dev@gmail.com</p>
                <div className='contact-explaination-line'></div>
                 <p>07.78.02.59.46</p>
            </div>
        </div >
    );
};

export default Contact; 