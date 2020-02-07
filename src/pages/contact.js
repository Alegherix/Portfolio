import React from 'react'
import Layout from "../components/layout"
import styled from "../css/contact.module.scss"
import {useForm} from "react-hook-form"


export default () => {
  const { register, handleSubmit, errors} = useForm();
  
  const onSubmit = (data, e) => {
    e.target.reset();
  }

  return (
    <Layout>
      <section>
        <div className={styled.container}>
          <h1>Kontakta mig</h1>
          <p>
            <span>Har du några frågor eller funderingar gällande mina projekt?</span>
            <span>Är du intresserad av att kontakta mig för arbete?</span>
            Tveka då inte på att höra av dig nedan.
          </p>
            <div className={styled.formContainer}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input name="namn" placeholder="Namn" ref={register({required: true})} />
                <textarea name="meddelande" placeholder="Meddelande" ref={register({required: true})} />
                {errors.namn && <p>Var vänligen fyll in ditt namn</p>}
                {errors.meddelande && <p>Var vänligen fyll i ditt meddelande</p>}
                <input className={styled.button} type="submit" value="Skicka meddelande" />
              </form>
            </div>
        </div>
        
      </section>
    </Layout>
  )
}
