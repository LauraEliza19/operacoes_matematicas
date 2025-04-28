import React from 'react'
import { CCard, CCardBody, CCardTitle, CRow, CCol, CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPlus, cilMinus, cilX } from '@coreui/icons'
import { customDivide } from './customIcon'

function TelaInicial({ onSelecionar }) {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center vh-100"
      style={{
        backgroundColor: '#401777',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <CCard className="mb-4 shadow" style={{ width: '90%', maxWidth: '600px', backgroundColor: '#7b3ae3' }}>
        <CCardBody>
          <CCardTitle className="text-center fs-4 mb-4 text-light">
            Escolha a operação a ser estudada
          </CCardTitle>
        </CCardBody>
      </CCard>

      <CRow className="g-4 justify-content-center">
        {['+', '-', '*', '/'].map((op, index) => (
          <CCol xs="auto" key={index}>
            <CButton
              style={{
                width: '100px',
                height: '100px',
                background: '#6082ee',
                border: 'none',
                borderRadius: '50%',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                transition: 'background-color 0.3s, transform 0.3s, box-shadow 0.3s',
              }}
              onClick={() => onSelecionar(op)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#4a6bbf';
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#6082ee';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
              }}
              onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
              onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <CIcon icon={op === '+' ? cilPlus : op === '-' ? cilMinus : op === '*' ? cilX : customDivide} size="xxl" style={{ color: '#9af9fb' }} />
            </CButton>
          </CCol>
        ))}
      </CRow>
    </div>
  )
}

export default TelaInicial
