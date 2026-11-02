import type { SubmitEvent } from 'react'
import { Link } from 'react-router'
import Footer from '../../components/layout/Footer/Footer'
import Button from '../../components/ui/Button/Button'
import Input from '../../components/ui/Input/Input'
import styles from './Login.module.scss'
import type { SelectOption } from '../../types'

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

const months: SelectOption[] = monthNames.map((name, index) => ({
  label: name,
  value: String(index + 1)
}))

const days: number[] = Array.from({ length: 31 }, (_, index) => index + 1)

const currentYear = new Date().getFullYear()
const years: number[] = Array.from({ length: 100 }, (_, index) => currentYear - index)
const sexOptions: SelectOption[] = [
  { label: 'Female', value: 'female' },
  { label: 'Male', value: 'male' }
]

function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
  event.preventDefault()
}

export default function Login() {
  return (
    <>
      <header className={styles.bar}>
        <div className={styles.barInner}>
          <Link to="/login" className={styles.logo}>
            classicbook
          </Link>

          <form className={styles.loginForm} onSubmit={handleSubmit}>
            <Input label="Email" type="email" name="email" autoComplete="email" required />
            <Input
              label="Password"
              type="password"
              name="password"
              autoComplete="current-password"
              required
            />
            <Button type="submit">Log In</Button>
          </form>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.intro}>
          <p className={styles.tagline}>
            classicbook helps you connect and share with the people in your life.
          </p>
        </section>

        <section className={styles.signup}>
          <h2 className={styles.signupTitle}>Sign up</h2>
          <p className={styles.subtitle}>It's free and anyone can join.</p>

          <form className={styles.signupForm} onSubmit={handleSubmit}>
            <Input
              label="First Name:"
              labelPosition="left"
              name="firstName"
              autoComplete="given-name"
              className={styles.wide}
              required
            />
            <Input
              label="Last Name:"
              labelPosition="left"
              name="lastName"
              autoComplete="family-name"
              className={styles.wide}
              required
            />
            <Input
              label="Your Email:"
              labelPosition="left"
              type="email"
              name="email"
              autoComplete="email"
              className={styles.wide}
              required
            />
            <Input
              label="New Password:"
              labelPosition="left"
              type="password"
              name="password"
              autoComplete="new-password"
              minLength={6}
              className={styles.wide}
              required
            />
            <div className={styles.row}>
              <label htmlFor="signup-sex" className={styles.rowLabel}>
                I am:
              </label>
              <select id="signup-sex" name="sex" className={styles.select} defaultValue="" required>
                <option value={''} disabled>
                  Select Sex:
                </option>
                {sexOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.row}>
              <span className={styles.rowLabel}>Birthday:</span>
              <select
                name="birthMonth"
                aria-label="Month"
                className={styles.select}
                defaultValue=""
                required
              >
                <option value={''} disabled>
                  Month:
                </option>
                {months.map((month) => (
                  <option key={month.value} value={month.value}>
                    {month.label}
                  </option>
                ))}
              </select>

              <select
                name="birthDay"
                aria-label="Day"
                className={styles.select}
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Day:
                </option>
                {days.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>

              <select
                name="birthYear"
                aria-label="Year"
                className={styles.select}
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Year:
                </option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.submitRow}>
              <Button type="submit" variant="signup">
                Sign Up
              </Button>
            </div>
          </form>
        </section>
      </main>

      <Footer />
    </>
  )
}
