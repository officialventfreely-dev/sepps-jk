'use client'
import { useState } from 'react'

export default function KontaktVorm() {
  const [olek, setOlek] = useState('ootab')

  async function saadaSonum(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setOlek('saadab')

    const vormiAndmed = new FormData(e.currentTarget)
    const vastus = await fetch('https://formspree.io/f/SINU_KOOD', {
      method: 'POST',
      body: vormiAndmed,
      headers: { Accept: 'application/json' },
    })

    if (vastus.ok) {
      setOlek('ok')
      ;(e.target as HTMLFormElement).reset()
    } else {
      setOlek('viga')
    }
  }

  return (
    <form className="vorm" onSubmit={saadaSonum}>
      <div className="vorm-rida">
        <div className="vorm-grupp">
          <label htmlFor="nimi">Nimi</label>
          <input type="text" id="nimi" name="nimi" placeholder="Sinu nimi" required />
        </div>
        <div className="vorm-grupp">
          <label htmlFor="email">E-post</label>
          <input type="email" id="email" name="email" placeholder="sinu@email.com" required />
        </div>
      </div>
      <div className="vorm-grupp">
        <label htmlFor="telefon">Telefon (valikuline)</label>
        <input type="tel" id="telefon" name="telefon" placeholder="+372 ..." />
      </div>
      <div className="vorm-grupp">
        <label htmlFor="vanusegrupp">Vanusegrupp</label>
        <select id="vanusegrupp" name="vanusegrupp">
          <option value="">— Vali vanusegrupp —</option>
          <option>2015 (minijalgpall)</option>
          <option>2014</option>
          <option>2013</option>
          <option>2012</option>
          <option>2011</option>
          <option>2010</option>
          <option>2009</option>
          <option>2008</option>
          <option>Muu küsimus</option>
        </select>
      </div>
      <div className="vorm-grupp">
        <label htmlFor="sonum">Sõnum</label>
        <textarea id="sonum" name="sonum" placeholder="Kirjuta siia..." required></textarea>
      </div>
      <button type="submit" className="vorm-saada" disabled={olek === 'saadab'}>
        {olek === 'saadab' ? 'Saadan...' : 'Saada sõnum →'}
      </button>
      {olek === 'ok' && (
        <div className="vorm-teade">✓ Sõnum saadetud! Võtame peagi ühendust.</div>
      )}
      {olek === 'viga' && (
        <div className="vorm-teade">✗ Midagi läks valesti. Proovi uuesti.</div>
      )}
    </form>
  )
}