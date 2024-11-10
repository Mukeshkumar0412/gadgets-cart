import React from 'react'
import { Container } from 'react-bootstrap'
import { AiOutlineFacebook } from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'
import { FiYoutube } from 'react-icons/fi'

type Props = {}

export default function LowerFoot({ }: Props) {
    return (
        <div>
            <Container>
                <div className='lowerfoot'>
                    &copy;2024 <b>UI developer.</b> Copyright &copy;DEV.All rights reserved worldwide.
                    <div className="footer-icons">
                        < FaInstagram />
                        <FiYoutube />
                        <AiOutlineFacebook />
                    </div>

                </div>
            </Container>
        </div>
    )
}