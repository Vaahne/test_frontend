    import styles from "./acceptData.module.css";
    import { useState } from "react";

    export default function AcceptData(){

        const [formData,setFormData] = useState({
            name: '',
            phoneNumber: '',
            email: ''
        });

        function handleChange(e){
            setFormData({...formData,[e.target.name]:e.target.value});
        }

        function handleSubmit(e){
            e.preventDefault();
        }
        return <>
            <div>
                <form onSubmit={handleSubmit} className={styles.formStyle}>
                    <input type="text" name="name" minLength={4} value={formData.name} placeholder="Enter your name" onChange={handleChange} required/>
                    <input type="number" name="phoneNumber" maxLength={10} value={formData.phoneNumber} minLength={10} placeholder="Phone Number" onChange={handleChange} required/>
                    <input type="email" name="email" value={formData.email} placeholder="Email" onChange={handleChange} required />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </>
    }