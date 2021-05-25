import React, { useRef, useState } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { getCheckedRadioEl } from '../../../../utils/forms'

const CompetitionFormFields = ({ status, message, onValidated }) => {
  const email = useRef(null)
  const firstName = useRef(null)
  const lastName = useRef(null)
  const postcode = useRef(null)
  const country = useRef(null)
  const dob = useRef(null)
  const isGirlContainer = useRef(null)
  const permission = useRef(null)
  const emailOwnerContainer = useRef(null)
  const terms = useRef(null)

  const [emailError, setEmailError] = useState(false)
  const [emailOwnerError, setEmailOwnerError] = useState(false)
  const [wordsError, setWordsError] = useState(false)
  const [termsError, setTermsError] = useState(false)
  const [dobError, setDobError] = useState(false)
  const [firstNameError, setFirstNameError] = useState(false)
  const [lastNameError, setLastNameError] = useState(false)
  const [postcodeError, setPostcodeError] = useState(false)
  const [countryError, setCountryError] = useState(false)

  const [wordsValue, setWordsValue] = useState('')

  const handleWordsChange = (event) => {
    const regex = /([\s]+)/g
    const value = event.target.value

    let spaces = 0
    if (value.length) {
      spaces = value.match(regex)
    }
    if (!spaces || spaces.length < 25) {
      setWordsValue(value)
    }
  }

  const isValidText = (text) => {
    return text.current.value && text.current.value.length > 2
  }

  const getSelectedIsGirlValue = (isGirlContainer) => {
    const isGirlValue = getCheckedRadioEl(isGirlContainer)
    return isGirlValue ? isGirlValue.value : ''
  }

  const getEmailOwnerValue = (emailOwnerContainer) => {
    const emailOwner = getCheckedRadioEl(emailOwnerContainer)
    return emailOwner ? emailOwner.value : ''
  }

  const resetValidationMessages = () => {
    setEmailError(false)
    setEmailOwnerError(false)
    setWordsError(false)
    setTermsError(false)
    setDobError(false)
    setFirstNameError(false)
    setLastNameError(false)
    setPostcodeError(false)
    setCountryError(false)
  }

  const validateEmailOwner = (emailOwnerContainer) => {
    const emailOwner = getEmailOwnerValue(emailOwnerContainer)
    if (!emailOwner) {
      setEmailOwnerError(true)
    }
    return !!emailOwner
  }
  const validateWords = (wordsValue) => {
    const valid = wordsValue.length > 0
    if (!valid) {
      setWordsError(true)
    }

    return valid
  }
  const validateTerms = (terms) => {
    const checked = terms.current.checked
    if (!checked) {
      setTermsError(true)
    }

    return checked
  }
  const validateDob = (dob) => {
    const value = dob.current.value
    if (!value) {
      setDobError(true)
    }

    return !!value
  }

  const validateFirstName = (firstName) => {
    const valid = isValidText(firstName)
    if (!valid) {
      setFirstNameError(true)
    }

    return valid
  }

  const validateLastName = (lastName) => {
    const valid = isValidText(lastName)
    if (!valid) {
      setLastNameError(true)
    }

    return valid
  }

  const validatePostcode = (postcode) => {
    const valid = postcode.current.value && postcode.current.value.length > 3
    if (!valid) {
      setPostcodeError(true)
    }

    return valid
  }

  const validateCountry = (country) => {
    const valid = country.current.value && country.current.value.length > 1
    if (!valid) {
      setCountryError(true)
    }

    return valid
  }

  const validateEmail = (email) => {
    const valid = email.current.value.length > 0
    if (!valid) {
      setEmailError(true)
    }

    return valid
  }

  const submit = () => {
    resetValidationMessages()

    const valid =
      validateFirstName(firstName) &&
      validateLastName(lastName) &&
      validatePostcode(postcode) &&
      validateCountry(country) &&
      validateDob(dob) &&
      validateEmail(email) &&
      validateEmailOwner(emailOwnerContainer) &&
      validateWords(wordsValue) &&
      validateTerms(terms) &&
      onValidated({
        EMAIL: email.current.value,
        FNAME: firstName.current.value,
        LNAME: lastName.current.value,
        POSTCODE: postcode.current.value,
        COUNTRY: country.current.value,
        DOB: dob.current.value,
        GIRL: getSelectedIsGirlValue(isGirlContainer),
        PERMISSION: permission.current.checked,
        EMAILOWNER: getEmailOwnerValue(emailOwnerContainer),
        TERMS: terms.current.checked,
        WORDS: wordsValue
      })
    return valid
  }

  return (
    <div className="competition-form">
      <div className="left-column mt-2">
        <p>You did it. How very clever! A good web developer needs to be able to look through all different types of code to find “bugs” or errors. And you might just have a knack for it!
          <br/><br/>
            Want to keep coding on a new computer? We’ve partnered with Lenovo to give our players the chance to win an IdeaPad C340.
          <br/><br/>
            Submit your entry below to go in the running. The winner will be drawn on 10th June 2020.
        </p>
        <p><strong>Enter your details below to be in the running to win a laptop:</strong></p>

        {
          status === 'sending' &&
        <div>
          sending...
        </div>
        }
        {
          status === 'error' &&
        <div>{message}</div>
        }
        {
          status === 'success' &&
        <div>{message}</div>
        }

        <div className="name-group">
          {firstNameError && <div className='text-red'>First name is required</div>}
          <input
            ref={firstName}
            type="text"
            placeholder="First name"
          />
          {lastNameError && <div className='text-red'>Last name is required</div>}

          <input
            ref={lastName}
            type="text"
            placeholder="Last name"
          />
        </div>
        <div className="location-group">
          {postcodeError && <div className='text-red'>Postcode is required</div>}
          <input
            ref={postcode}
            type="text"
            placeholder="Postcode"
          />
          {countryError && <div className='text-red'>Country is required</div>}
          <input
            ref={country}
            type="text"
            placeholder="Country"
          />
        </div>
      </div>
      <div className="right-column">
        <div className="gender-identity">
          <div>
            <p><strong>Do you identify as a girl?</strong></p>
          </div>
          <div ref={isGirlContainer}>
            <input
              type="radio"
              id="yesGirl"
              name="isGirl"
              value="yes"
            />
            <label htmlFor="yesGirl">Yes</label>
            <input
              type="radio"
              id="noGirl"
              name="isGirl"
              value="no"
            />
            <label htmlFor="noGirl">No</label>
            <input
              type="radio"
              id="sometimesGirl"
              name="isGirl"
              value="sometimes"
            />
            <label htmlFor="sometimesGirl">Sometimes</label>
          </div>
        </div>
        <div className="demographic-group">
          { dobError && <div className='text-red'>Please entry DOB</div>}
          <input
            ref={dob}
            type="date"
            placeholder="DOB"
          />
          {emailError && <div className='text-red'>Please enter email</div>}
          <input
            ref={email}
            name="email"
            type="email"
            placeholder="Email"
          />
        </div>
        {emailOwnerError && <div className='text-red'>Please choose email owner</div>}
        <div className="email-owner" ref={emailOwnerContainer}>
          <input
            type="radio"
            id="mine"
            name="emailOwner"
            value="mine"
          />
          <label htmlFor="mine">My email address</label>
          <input
            type="radio"
            id="guardian"
            name="emailOwner"
            value="guardian"
          />
          <label htmlFor="guardian">My guardian’s email address</label>
        </div>
        <div>
          {wordsError && <div className='text-red'>Cannot be blank</div>}
          <input
            value={wordsValue}
            onChange={handleWordsChange}
            name="words"
            type="text"
            className="words"
            placeholder="In 25 words or less, why do you want to learn to code?"
          />

        </div>
        <div className="permissions">
          <label className="checkbox">
            <input
              type="checkbox"
              ref={permission}
              id="permission"
              name="permission"
            />
            <span></span>
          I have my parent or guardian’s permission to enter this competition.
          </label>
        </div>

        {termsError && <div className='text-red'>Must read terms and conditions</div>}
        <div className="terms">
          <label className="checkbox">
            <input
              type="checkbox"
              ref={terms}
              id="terms"
              name="terms"
            />
            <span></span>
            I have read and agree to the <a className="text-red" target="blank" href="https://www.codelikeagirl.com/puzzles/terms-and-conditions">terms and conditions.</a></label>
        </div>

        <br />
        <button className='clickable' onClick={submit}>
        Submit
        </button>
      </div>
    </div>
  )
}

const CompetitionForm = () => {
  const url = 'https://codelikeagirl.us10.list-manage.com/subscribe/post?u=671753830c5058d0129199251&id=9405f6954c'

  return (
    <div>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CompetitionFormFields
            status={status}
            message={message}
            onValidated={formData => {
              return subscribe(formData)
            }}
          />
        )}
      />
    </div>
  )
}

export default CompetitionForm
