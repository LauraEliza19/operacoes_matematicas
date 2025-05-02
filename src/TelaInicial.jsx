import React from 'react'
import { CCard, CCardBody, CCardTitle, CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPlus, cilMinus, cilX } from '@coreui/icons'

const divideIcon = {
  tag: 'svg',
  attrs: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    width: '24',
    height: '24',
    fill: 'currentColor',
  },
  children: [
    {
      tag: 'circle',
      attrs: { cx: '12', cy: '6', r: '2' },
    },
    {
      tag: 'rect',
      attrs: { x: '4', y: '11', width: '16', height: '2', rx: '1' },
    },
    {
      tag: 'circle',
      attrs: { cx: '12', cy: '18', r: '2' },
    },
  ],
};

function TelaInicial({ onSelecionar }) {
  const buttonStyle = {
    width: '90px',
    height: '90px',
    background: 'linear-gradient(145deg,rgb(124, 216, 227) 60%,rgb(76, 82, 170) 100%)',
    border: 'none',
    borderRadius: '50%',
    boxShadow: '0 4px 12px rgba(59,0,106,0.2)',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  }

  const divideIconStyle = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    width: '100%',
    height: '100%',
  }

  const dotStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: '#3B006A',
  }

  const minusStyle = {
    width: '50px',
    height: '5px',
    background: '#3B006A',
    borderRadius: '1.5px',
  }

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)'
    e.currentTarget.style.boxShadow = '0 6px 16px rgba(59,0,106,0.3)'
  }

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)'
    e.currentTarget.style.boxShadow = '0 4px 12px rgba(59,0,106,0.2)'
  }

  const handleMouseDown = (e) => {
    e.currentTarget.style.transform = 'scale(0.95)'
  }

  const handleMouseUp = (e) => {
    e.currentTarget.style.transform = 'scale(1)'
  }

  const operacoes = [
    { simbolo: '+', icone: cilPlus },
    { simbolo: '-', icone: cilMinus },
    { simbolo: '*', icone: cilX },
    { simbolo: '/', icone: cilMinus },
  ]

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      width: '100%', 
      overflowX: 'hidden',
      fontFamily: 'Josefin Sans, sans-serif',
      position: 'relative',
    }}>
      {/* Efeitos de fundo */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 20%, rgba(123, 63, 242, 0.15) 0%, transparent 50%)',
        zIndex: 0,
      }} />
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 80% 80%, rgba(124, 216, 227, 0.15) 0%, transparent 50%)',
        zIndex: 0,
      }} />
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.15) 75%)',
        backgroundSize: '60px 60px',
        opacity: 0.2,
        zIndex: 0,
      }} />
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(123, 63, 242, 0.1) 0%, rgba(124, 216, 227, 0.1) 100%)',
        zIndex: 0,
      }} />
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)',
        zIndex: 0,
      }} />

      <div
        className="d-flex flex-column align-items-center justify-content-center vh-100"
        style={{
          padding: '20px',
          fontFamily: 'Josefin Sans, sans-serif',
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          maxWidth: '100%',
          zIndex: 1,
        }}
      >
        <div style={{ 
          width: '100%',
          maxWidth: '600px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '0 auto',
        }}>
          <CCard className="shadow" style={{ 
            width: '100%',
            background: 'linear-gradient(145deg, #7B3FF2 0%, #5B2BB5 100%)',
            borderRadius: '16px',
            border: 'none',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%)',
              backgroundSize: '20px 20px',
              opacity: 0.2,
            }} />
            <CCardBody style={{ padding: '24px 32px', position: 'relative' }}>
              <CCardTitle className="text-center mb-0 text-light" style={{
                fontSize: '1.7rem',
                fontWeight: '600',
                letterSpacing: '1px',
                fontFamily: 'Josefin Sans, sans-serif',
                textShadow: '0 2px 4px rgba(0,0,0,0.2)',
              }}>
                Escolha a operação a ser estudada
              </CCardTitle>
            </CCardBody>
          </CCard>

          <div style={{ 
            width: '100%', 
            maxWidth: '400px', 
            marginTop: '20px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '10px',
            padding: '10px',
            position: 'relative',
            zIndex: 1,
          }}>
            {operacoes.map((op, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                <CButton
                  style={{
                    ...buttonStyle,
                    fontFamily: 'Josefin Sans, sans-serif',
                  }}
                  onClick={() => onSelecionar(op.simbolo)}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                >
                  {op.simbolo === '/' ? (
                    <div style={divideIconStyle}>
                      <div style={dotStyle} />
                      <div style={minusStyle} />
                      <div style={dotStyle} />
                    </div>
                  ) : (
                    <CIcon 
                      icon={op.icone}
                      size="xxl" 
                      style={{ 
                        color: '#3B006A',
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                      }} 
                    />
                  )}
                </CButton>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TelaInicial
