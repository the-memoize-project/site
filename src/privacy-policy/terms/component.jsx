import style from './style'

function component() {
  return (
    <section className={style.terms}>
      <article className={style.terms__article}>
        <h2 className={style.terms__h2}>1. Informações coletadas</h2>
        <p className={style.terms__p}>
          Coletamos informações que você fornece diretamente ao criar uma conta
          (nome, e-mail, senha), bem como dados gerados pelo uso da plataforma
          (flashcards criados, histórico de revisões, desempenho de estudo).
          Também coletamos dados técnicos como endereço IP, tipo de navegador e
          sistema operacional para fins de segurança e diagnóstico.
        </p>
      </article>
      <article className={style.terms__article}>
        <h2 className={style.terms__h2}>2. Como utilizamos suas informações</h2>
        <p className={style.terms__p}>
          Utilizamos seus dados para fornecer e melhorar os serviços do
          Memoize, personalizar sua experiência de aprendizado, enviar
          comunicações relacionadas à conta (confirmações, redefinição de senha)
          e analisar o uso da plataforma de forma agregada para aprimorar
          funcionalidades.
        </p>
      </article>
      <article className={style.terms__article}>
        <h2 className={style.terms__h2}>3. Segurança dos dados</h2>
        <p className={style.terms__p}>
          Adotamos medidas técnicas e organizacionais adequadas para proteger
          seus dados contra acesso não autorizado, alteração, divulgação ou
          destruição. As senhas são armazenadas com hash criptográfico e nunca
          em texto simples. Utilizamos conexões criptografadas (HTTPS/TLS) em
          toda a plataforma.
        </p>
      </article>
      <article className={style.terms__article}>
        <h2 className={style.terms__h2}>4. Compartilhamento com terceiros</h2>
        <p className={style.terms__p}>
          Não vendemos, alugamos ou compartilhamos suas informações pessoais
          com terceiros para fins comerciais. Podemos compartilhar dados com
          prestadores de serviços essenciais (infraestrutura de nuvem, análise
          de erros) que atuam em nosso nome e estão sujeitos a obrigações de
          confidencialidade compatíveis com esta política.
        </p>
      </article>
      <article className={style.terms__article}>
        <h2 className={style.terms__h2}>5. Retenção de dados</h2>
        <p className={style.terms__p}>
          Mantemos seus dados enquanto sua conta estiver ativa ou pelo tempo
          necessário para cumprir as finalidades descritas nesta política. Após
          o encerramento da conta, os dados pessoais são excluídos em até 90
          dias, ressalvadas as hipóteses de retenção obrigatória previstas em
          lei.
        </p>
      </article>
      <article className={style.terms__article}>
        <h2 className={style.terms__h2}>6. Seus direitos</h2>
        <p className={style.terms__p}>
          De acordo com a LGPD, você tem direito a acessar, corrigir, portar e
          solicitar a exclusão dos seus dados pessoais. Para exercer esses
          direitos, entre em contato conosco pelo e-mail privacidade@memoize.cards.
          Responderemos às solicitações em até 15 dias úteis.
        </p>
      </article>
      <article className={style.terms__article}>
        <h2 className={style.terms__h2}>7. Privacidade de crianças</h2>
        <p className={style.terms__p}>
          O Memoize não é destinado a crianças menores de 13 anos. Não
          coletamos intencionalmente informações pessoais de crianças. Caso
          identifiquemos que uma conta foi criada por uma criança sem
          consentimento dos responsáveis, procederemos à exclusão imediata dos
          dados.
        </p>
      </article>
      <article className={style.terms__article}>
        <h2 className={style.terms__h2}>8. Alterações nesta política</h2>
        <p className={style.terms__p}>
          Podemos atualizar esta Política de Privacidade periodicamente.
          Notificaremos você sobre alterações significativas por e-mail ou por
          aviso destacado na plataforma. O uso continuado do Memoize após a
          notificação constitui aceitação das alterações.
        </p>
      </article>
    </section>
  )
}

export default component
