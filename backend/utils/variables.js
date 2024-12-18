export const succesMessage = 'Przedmiot został dodany'
export const removedMessage = 'Przedmiot został usunięty'
export const updateMessage = 'koszyk został zaktualizowany'
export const userExistsMess = 'Użytkownik o tej nazwie już istnieje'
export const badEmailMess = 'Niepoprawny adres email'
export const shortPassMess = 'Wprowadź dłuższe hasło (min 8 znaków)'
export const userDosentExistsMess = 'Użytkownik o tej nazwie nie istnieje'
export const invalidDataMess = 'Wprowadzono nieprawidłowe dane'
export const badLoginAgain = 'Ponownie podano błędne dane'
export const addedMessage = 'Pomyślnie dodano do koszyka'
export const orderStatusMess = 'Zamówienie w trakcie realizacji'
export const deliveryChargesMess = 'del czergs'
export const modePayment = 'modePayment'
export const emailNoExistsMess = 'taki mail nie istnieje :/'
export const passwordUpdatedMess = 'hasło pomyślnie zostało zmienione'
export const wrongTokenMess = 'błędny odnośnik do konta'

export const verifyUrl = '/weryfikacja' 
export const orderSlug = 'zamowienia'
export const panelPath = '/panel'
export const orderAminSlug = `${panelPath}/zamowione`
export const addAminSlug = `${panelPath}/dodaj`
export const userOrdersUrl = '/zamowienia-klienta'
export const resetPassUrl = '/reset-password'

export const customErrors = {
    badLoginAgain: 'podano błędne dane',
    default: 'wystąpił błąd, spróbuj ponownie później',
    logout: 'wystąpił problem podczas wylogowania',
    loginin: 'wystąpił błąd przy logowaniu',
    signup: 'wystąpił problem przy rejestracji',
    verifyEmail: 'wystąpił problem przy weryfikacji e-maila',
    resetPass: 'wystąpił problem przy resetowaniu hasła',
    remindPassMail: 'wystąpił problem przy wysyłaniu e-maila',


    invalidCredentials: 'nieprawidłowe dane',
    userAlreadyExists: 'użytkownik o takim mailu już istnieje',
    inVeirfyEmail: 'problem z wieryfikacją emaila',
    serverError: 'błąd po stronie serwera',
    inLogin: 'błąd przy próbie zalogowania',
    userNotFound: 'nie udało sie znaleźć konta',
    forgotPassword: 'problem podczas resetowania hasła',
    inCheckAuth: 'błąd poczas autoryzacji',
    usernNotVerified: 'użytkownik nie jest zwryfikowany, na adres e-mail ponownie została wysłana wiadomość z kodem weryfikacynym',
    userNotAdmin: 'potrzebujesz większych uprawnień, żeby się zalogować, skontaktuj się z administratoem strony',

    address: 'problem z zapisaniem adresu',
    rabatValue: 'wartość rabatu jest wymagana',

    userDosentExists: 'użytkownik o podanym mailu nie istnieje',
    rabatExists: 'użytkownik ma już przypisany do siebie inny rabat',
    orderFiled: 'zamówienie nie zostało złożone',
    failedData: 'kod nie jest przypisany do podanego adresu email',
    expiriedCode: 'kod nie jest aktualny',

    orderAllreadyVeryried: 'zamówienie zostało już zweryfikowane',
    rabatUsed: 'rabat został już wykorzystany',
    userDosentHaveRabat: 'kod rabatowy nie jest przypisany do uzytkownika',
    loadListField: 'lista nie została załadowana',
    verifyOrderField: 'weryfikacja zamówienia się nie powiodła',
    statusUpdateFiled: 'aktualizacja statusu zamówienia sie nie powiodła',

    categoryAlreadyExists: 'kategoria o tej nazwie już istnieje',
    sizeAlreadyExists: 'taki rozmiar juz istnieje',
    catDosentSaved: 'wystapił błąd poczas zapisywania kategorii',

    userAlreadyIsAdmin: 'uprawnienia administratora są już przyznane',

    noPermissions: 'brak uprawnień',
    dosentSaved: 'wystąpił problem podczas zapisu'




}

export const customInfo = { 
    default: 'dane zaktualizowane pomyślnie',
    defaultRemoved: 'pomyslnie usunięto',
    userCreatedSuccessfully: 'konto założne pomyślnie',
    emailSent: 'email wysłany: ',
    emailSentSuccessfully: 'mail wysłany pomyślnie',
    orderVerifiedSuccess: 'zamówienie zostało pomyślnie zweryfikowane',
    loggedSuccessfully: 'zalogowano pomyślnie',
    sentCodeToEmail: 'na podany adres email wysłano wiadomość z dalszymi wskazówkami w celu zresetowania hasła',
    resetSuccessfull: 'hasło zresetowane pomyślnie',
    rabatCreatedSuccessfully: 'rabat wygenerowany pomyślnie',
    permissionsAddedSuccessfully: 'uprawnienia zostały zaktualizowane',
    rabatUsed: 'rabat wykorzystany',
    rabatDeleted: 'rabat został usunięty',
    orderSuccess: 'zamówienie złożone pomyślnie',
    statusUpdated: 'status zamówienia zaktualizowany',
    orderRemoved: 'zamówienie zostało usunięte',
    categoryRemoved: 'kategoria została usunięta',
    itemRemoved: 'przedmiot został usunięty',
    itemAdded: 'przedmiot został dodany pomyślnie',
    catSavedSuccess: 'kategoria zapisana pomyślnie',
    userAlreadyVerified: 'użytkownik już został zweryfikowany',
    categoryUpdated: 'kategoria zaktualizowana',
    itemUpdated: 'informacje zaktualizowane',
    savedSuccess: 'dane zapisane pomyślnie',
    ordersFatched: 'wszystkie zamówienia załadowane',
    orderFatched: 'zamówienie załadowane' 



}
