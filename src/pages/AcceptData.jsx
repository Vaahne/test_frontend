    import styles from "./acceptData.module.css";
    import { useState } from "react";
    import { useNavigate } from "react-router-dom";

    export default function AcceptData(){

        const [formData,setFormData] = useState({
            name: '',
            phone: '',
            email: ''
        });

        const navigate = useNavigate();

        function handleChange(e){
            setFormData({...formData,[e.target.name]:e.target.value});
        }

       async function handleSubmit(e){
            e.preventDefault();
            try{

                 const response = await fetch('http://localhost:8001/add-user', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify(formData)
                                });
                 const data = await response.json();

                 if(response.ok){
                     navigate(`/greeting?name=${formData.name}`);
                 }else {
                     alert('Error saving user: ' + data.error);
                }

            }catch(err){
                console.error(err);
            }

            console.log(formData)
        }
        return <>
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit} className={styles.formStyle}>
                    <input type="text" name="name" minLength={4} value={formData.name} placeholder="Enter your name" onChange={handleChange} required/>
                        <input type="tel" name="phone" maxLength={10} value={formData.phone} minLength={10} placeholder="Phone Number" onChange={handleChange} required/>
                        <input type="email" name="email" value={formData.email} placeholder="Email" onChange={handleChange} required />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </>
    }