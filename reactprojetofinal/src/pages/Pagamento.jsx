import React, { useEffect } from 'react';
import './pagamento.css';

const PaymentForm = () => {
  useEffect(() => {
    $('#numeroCartao').mask('0000 0000 0000 0000');
    $('#dataValidade').mask('00 / 00');
    $('#cvcInput').on('input', function() {
      this.value = this.value.replace(/\D/g, '');
    });
  }, []);

  const confirmarCompra = () => {
    alert('Compra confirmada! Valeu pelo dinheiro');
  };

  return (
    <div className="wrapper">
      <div className="payment">
        <div className="payment-logo">
          <p></p>
        </div>
        <h2>Pagamento</h2>
        <div className="form">
          <div className="cartao space icon-relative">
            <label className="rotulo">Titular do Cartão:</label>
            <input type="text" className="entrada" placeholder="Nome no Cartão" />
            <i className="fas fa-user"></i>
          </div>
          <div className="cartao space icon-relative">
            <label className="rotulo">Número do Cartão:</label>
            <input type="text" className="entrada" id="numeroCartao" placeholder="Número do Cartão" />
            <i className="far fa-credit-card"></i>
          </div>
          <div className="grupo-cartao space">
            <div className="item-cartao icon-relative">
              <label className="rotulo">Data de Validade:</label>
              <input type="text" name="data-validade" className="entrada" id="dataValidade" placeholder="MM / AA" />
              <i className="far fa-calendar-alt"></i>
            </div>
            <div className="item-cartao icon-relative">
              <label className="rotulo">CVC:</label>
              <input type="text" className="entrada" id="cvcInput" maxLength="3" placeholder="CVC" />
              <i className="fas fa-lock"></i>
            </div>
          </div>
          <div className="botao" onClick={confirmarCompra}>
            Pagar
          </div>
        </div>
      </div>
      <footer>
        <div className="footer">
          <p>&copy; 2024 Loja dos 6. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default PaymentForm;
