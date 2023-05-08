import { Rodape ,FooterContainer} from "./style";
import Link from "next/link";
import Image from "next/image";


export default function Footer() {
    return (
        <>

            <Rodape>
             
                <FooterContainer>
                Doce Surpresa Cestaria &copy; Todos os direitos reservados <br></br>
                <span style={{textAlign:"left"}}>by: Selma Fernanda </span>
                </FooterContainer>

               

                <div id="Social">
                <Link href={"https://instagram.com/dscestaria?igshid=YmMyMTA2M2Y="} target="_blank">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.375 10C13.375 8.125 11.875 6.625 10 6.625C8.125 6.625 6.625 8.125 6.625 10C6.625 11.875 8.125 13.375 10 13.375C11.875 13.375 13.375 11.875 13.375 10ZM15.125 10C15.125 12.875 12.875 15.125 10 15.125C7.125 15.125 4.875 12.875 4.875 10C4.875 7.125 7.125 4.875 10 4.875C12.875 4.875 15.125 7.125 15.125 10ZM16.5 4.625C16.5 5.375 16 5.875 15.25 5.875C14.5 5.875 14 5.375 14 4.625C14 3.875 14.5 3.375 15.25 3.375C16 3.375 16.5 4 16.5 4.625ZM10 1.75C8.5 1.75 5.375 1.625 4.125 2.125C3.25 2.5 2.5 3.25 2.25 4.125C1.75 5.375 1.875 8.5 1.875 10C1.875 11.5 1.75 14.625 2.25 15.875C2.5 16.75 3.25 17.5 4.125 17.75C5.375 18.25 8.625 18.125 10 18.125C11.375 18.125 14.625 18.25 15.875 17.75C16.75 17.375 17.375 16.75 17.75 15.875C18.25 14.5 18.125 11.375 18.125 10C18.125 8.625 18.25 5.375 17.75 4.125C17.5 3.25 16.75 2.5 15.875 2.25C14.625 1.625 11.5 1.75 10 1.75ZM20 10V14.125C20 15.625 19.5 17.125 18.375 18.375C17.25 19.5 15.75 20 14.125 20H5.875C4.375 20 2.875 19.5 1.625 18.375C0.625 17.25 0 15.75 0 14.125V5.875C0 4.25 0.625 2.75 1.625 1.625C2.875 0.625 4.375 0 5.875 0H14.125C15.625 0 17.125 0.5 18.375 1.625C19.375 2.75 20 4.25 20 5.875V10Z" fill="white" />
                </svg>
                </Link>
                <Link href={"https://wa.me/5512991134425"} target="_blank">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.2562 4.7054C17.3777 3.81791 16.3311 3.11425 15.1777 2.63545C14.0243 2.15665 12.7872 1.9123 11.5383 1.91665C6.30583 1.91665 2.04125 6.18124 2.04125 11.4137C2.04125 13.0908 2.48208 14.72 3.30625 16.1575L1.96458 21.0833L6.99583 19.7608C8.38542 20.5179 9.9475 20.9204 11.5383 20.9204C16.7708 20.9204 21.0354 16.6558 21.0354 11.4233C21.0354 8.88374 20.0483 6.49749 18.2562 4.7054ZM11.5383 19.3104C10.12 19.3104 8.73042 18.9271 7.51333 18.2083L7.22583 18.0358L4.23583 18.8217L5.03125 15.9083L4.83958 15.6112C4.05159 14.3529 3.63318 12.8984 3.63208 11.4137C3.63208 7.0629 7.17792 3.51707 11.5287 3.51707C13.6371 3.51707 15.6208 4.34124 17.1062 5.83624C17.8418 6.56837 18.4246 7.4392 18.8211 8.39827C19.2175 9.35733 19.4197 10.3855 19.4158 11.4233C19.435 15.7742 15.8892 19.3104 11.5383 19.3104ZM15.87 13.4071C15.6304 13.2921 14.4612 12.7171 14.2504 12.6308C14.03 12.5542 13.8767 12.5158 13.7138 12.7458C13.5508 12.9854 13.1004 13.5221 12.9662 13.6754C12.8321 13.8383 12.6883 13.8575 12.4487 13.7329C12.2092 13.6179 11.4425 13.3592 10.5417 12.5542C9.8325 11.9217 9.36292 11.1454 9.21917 10.9058C9.085 10.6662 9.2 10.5417 9.32458 10.4171C9.43 10.3117 9.56417 10.1392 9.67917 10.005C9.79417 9.87082 9.84208 9.7654 9.91875 9.61207C9.99542 9.44915 9.95708 9.31499 9.89958 9.19999C9.84208 9.08499 9.36292 7.91582 9.17125 7.43665C8.97958 6.97665 8.77833 7.03415 8.63458 7.02457H8.17458C8.01167 7.02457 7.7625 7.08207 7.54208 7.32165C7.33125 7.56124 6.71792 8.13624 6.71792 9.3054C6.71792 10.4746 7.57083 11.6054 7.68583 11.7587C7.80083 11.9217 9.36292 14.3175 11.7396 15.3429C12.305 15.5921 12.7458 15.7358 13.0908 15.8412C13.6562 16.0233 14.1738 15.9946 14.5858 15.9371C15.0458 15.87 15.9946 15.3621 16.1862 14.8062C16.3875 14.2504 16.3875 13.7808 16.3204 13.6754C16.2533 13.57 16.1096 13.5221 15.87 13.4071Z" fill="white" />
                </svg>
                </Link>
                </div>
            </Rodape>

        </>
    )
}


module.exports = Footer