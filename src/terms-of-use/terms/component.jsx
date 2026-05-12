import style from './style'

function component() {
  return (
    <section className={style.terms}>
      <article className={style.terms__article}>
        <h2 className={style.terms__h2}>1. Responsabilidade pelo conteúdo</h2>
        <p className={style.terms__p}>
          O usuário é o único responsável pelo conteúdo que cria, armazena e
          compartilha na plataforma Memoize. A Memoize não se responsabiliza por
          qualquer conteúdo gerado pelos usuários que viole leis vigentes ou
          direitos de terceiros.
        </p>
      </article>
      <article className={style.terms__article}>
        <h2 className={style.terms__h2}>2. Uso adequado da plataforma</h2>
        <p className={style.terms__p}>
          É vedado utilizar o Memoize para fins ilícitos, prejudiciais,
          abusivos, difamatórios, obscenos ou que infrinjam direitos de
          propriedade intelectual. O descumprimento dessas condições poderá
          acarretar o encerramento imediato da conta.
        </p>
      </article>
      <article className={style.terms__article}>
        <h2 className={style.terms__h2}>3. Proteção de dados pessoais</h2>
        <p className={style.terms__p}>
          A Memoize coleta e processa dados pessoais conforme descrito em nossa
          Política de Privacidade, em conformidade com a Lei Geral de Proteção
          de Dados (LGPD — Lei nº 13.709/2018). Ao utilizar a plataforma, você
          consente com o tratamento dos seus dados nos termos descritos.
        </p>
      </article>
      <article className={style.terms__article}>
        <h2 className={style.terms__h2}>4. Propriedade intelectual</h2>
        <p className={style.terms__p}>
          Todo o conteúdo original produzido pelo usuário permanece de sua
          propriedade. Ao compartilhar decks publicamente, o usuário concede à
          Memoize uma licença não exclusiva para exibir esse conteúdo na
          plataforma. A marca, o código e os demais elementos da plataforma são
          de propriedade da Memoize e não podem ser reproduzidos sem
          autorização.
        </p>
      </article>
      <article className={style.terms__article}>
        <h2 className={style.terms__h2}>5. Riscos e disponibilidade</h2>
        <p className={style.terms__p}>
          A Memoize envida esforços para manter a plataforma disponível de
          forma contínua, mas não garante disponibilidade ininterrupta. A
          plataforma é fornecida "no estado em que se encontra", sem garantias
          explícitas ou implícitas de adequação a finalidades específicas.
        </p>
      </article>
      <article className={style.terms__article}>
        <h2 className={style.terms__h2}>6. Isenção de responsabilidade</h2>
        <p className={style.terms__p}>
          Na extensão permitida pela legislação aplicável, a Memoize não será
          responsável por danos diretos, indiretos, incidentais ou
          consequenciais decorrentes do uso ou da impossibilidade de uso da
          plataforma.
        </p>
      </article>
      <article className={style.terms__article}>
        <h2 className={style.terms__h2}>7. Encerramento de conta</h2>
        <p className={style.terms__p}>
          O usuário pode encerrar sua conta a qualquer momento. A Memoize
          reserva-se o direito de suspender ou encerrar contas que violem estes
          Termos, sem aviso prévio. Após o encerramento, os dados do usuário
          poderão ser mantidos pelos prazos previstos em lei.
        </p>
      </article>
    </section>
  )
}

export default component
