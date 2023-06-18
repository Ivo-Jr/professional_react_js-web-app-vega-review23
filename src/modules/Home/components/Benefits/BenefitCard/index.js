
import React from 'react';

import { BenefitContent, BenefitSubtitle, BenefitImg, BenefitDescription } from './styles.js';
// import { FadeInScroll } from '../../../../utils/fadeInScroll/index.js';

export const BenefitCard = ({ id, animationDelay, benefitImg, benefitSubtitle, benefitDescription }) => {
  return (
    // <FadeInScroll
    //   id={id}
    //   animationDelay={animationDelay}
    //   sx={{ txi: '0px', tyi: '30px' }}
    // >

    // A estilização deve ser injetada por classes ao invés de id
    <BenefitContent id={id}>
      <BenefitImg src={benefitImg} alt={`${benefitImg}-img`} />
      <BenefitSubtitle>
        {benefitSubtitle}
      </BenefitSubtitle>
      <BenefitDescription>
        {benefitDescription}
      </BenefitDescription>
    </BenefitContent>
    // </FadeInScroll>
  )
}