import React from 'react'

const Contact = () => {
    return (
        <div className='contact'>
            <main>
                <h1>Contact Us</h1>

                <form action='https://formspree.io/f/xyyajnab' method='POST'>
                    <div>
                        <label>Name</label>
                        <input type="text" name='name' required placholder="abc" />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email"name='email' required placholder="abc@xyz.com" />
                    </div>

                    <div>
                        <label>Message</label>
                        <textarea type="text" name='message' required placholder="write your message here....." />
                    </div>

                    <button type='submit'>Send</button>
                </form>
            </main>
        </div>
    )
}

export default Contact