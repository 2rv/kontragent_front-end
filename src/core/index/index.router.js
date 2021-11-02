import {
  authRedirectLogged,
  authRedirectNotAdmin,
  authRedirectPrivated,
  authRedirectVerification,
  authRedirectAdmin,
} from '../../lib/common/auth';
import { AUTH_SIGNUP_ROUTE_PATH } from '../../core/auth-signup/auth-signup.constant';
import { AUTH_VERIFICATION_EMAIL_ROUTE_PATH } from '../../core/auth-verification-email';
import { AUTH_VERIFICATION_PHONE_ROUTE_PATH } from '../../core/auth-verification-phone';
import { USER_ADMIN_LIST_ROUTE_PATH } from '../../core/user-admin-list/user-admin-list.constant';
import { COMPANY_ACCOUNT_LIST_ROUTE_PATH } from '../../core/company-account-list/company-account-list.constant';
export function IndexRouter(ctx) {

  function codingScoreReportPercent(scores) {
    let poorScore = 0;
    let fairScore = 0;
    let goodScore = 0;
    let exellentScore = 0;
    let eliteScore = 0;

    let percentArr = [
      `Poor: ${poorScore}`,
      `Fair: ${fairScore}`,
      `Good: ${goodScore}`,
      `Exellent: ${exellentScore}`,
      `Elite: ${eliteScore}`
    ]

    scores.map((userScore) => {
      if (userScore <= 599) {
        poorScore = poorScore + userScore
      } else if (userScore >= 600 && userScore <= 699) {
        fairScore = fairScore + userScore
      } else if (userScore >= 700 && userScore <= 749) {
        goodScore = goodScore + userScore
      } else if (userScore >= 750 && userScore <= 799) {
        exellentScore = exellentScore + userScore
      } else if (userScore >= 800) {
        eliteScore = eliteScore + userScore
      }
    })
    console.log(percentArr)

  }

  codingScoreReportPercent([330, 723, 730, 825])

  authRedirectPrivated(ctx, AUTH_SIGNUP_ROUTE_PATH);

  authRedirectVerification(
    ctx,
    AUTH_VERIFICATION_EMAIL_ROUTE_PATH,
    AUTH_VERIFICATION_PHONE_ROUTE_PATH,
  );
  authRedirectAdmin(ctx, USER_ADMIN_LIST_ROUTE_PATH);
  authRedirectLogged(ctx, COMPANY_ACCOUNT_LIST_ROUTE_PATH);
}
