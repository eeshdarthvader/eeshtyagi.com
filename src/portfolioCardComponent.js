import React from 'react';

export default class portfolioCardComponent extends React.Component {
    renderProjectTitle() {
        return <div>School Project No.1</div>;
    }

    renderProjectDescription() {
        return (
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc ipsum elegantius poni meliusque potuit.
              Re mihi non aeque satisfacit, et quidem locis pluribus. Sit enim idem caecus, debilis. Apud ceteros
              autem philosophos, qui quaesivit aliquid, tacet; Longum est enim ad omnia respondere, quae a te dicta
              sunt. Non enim ipsa genuit hominem, sed accepit a natura inchoatum. Duo Reges: constructio interrete.
              Quod idem cum vestri faciant, non satis magnam tribuunt inventoribus gratiam.
              <a href="project link" />
            </p>
        );
    }
    render() {
        return (
            <div> 
              Hello I am a portfolioCardComponent
              {this.renderProjectTitle()}
              {this.renderProjectDescription()}
            </div>
          );
    }
}
