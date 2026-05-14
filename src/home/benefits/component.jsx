import FlexibleApplication from './flexibleApplication'
import ImprovedRetention from './improvedRetention'
import LastingRetention from './lastingRetention'
import StudyEfficiency from './studyEfficiency'
import style from './style'
import TimeSaving from './timeSaving'

function component() {
  return (
    <section className={style.benefits}>
      <div className={style.benefits__div}>
        <ImprovedRetention />
        <LastingRetention />
        <StudyEfficiency />
        <TimeSaving />
        <FlexibleApplication />
      </div>
      <hgroup className={style.benefits__hgroup}>
        <h1 className={style.benefits__h1}>Conhecimento que fica. De graça.</h1>
        <h2 className={style.benefits__h2}>
          Sem assinatura. Sem limite. Sem pegadinha.
        </h2>
      </hgroup>
      <a className={style.benefits__a} href="//app.memoize.cards/auth/sign-in">
        Criar minha conta
      </a>
    </section>
  )
}

export default component
