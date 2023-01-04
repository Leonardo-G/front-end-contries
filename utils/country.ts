import { Languages, NativeName } from '../interfaces/country';

export const returnLanguages = ( languages: Languages ): string => {
    let languagesText = "";

    const languagesArray = Object.keys( languages );

    languagesArray.forEach( (l, idx) => {
        if ( languagesArray.length === idx + 1 ){

            languagesText += `${ languages[l] }`
            return;
        }

        languagesText += `${ languages[l] }, `
        
    })

    return languagesText
}

export const returnNativeName = ( nativeName: NativeName ) => {
    let nativeNameText = "";

    const nativeNameArray = Object.keys( nativeName );

    nativeNameArray.forEach( (l, idx) => {
        if ( nativeNameArray.length === idx + 1 ){

            nativeNameText += `${ nativeName[l].official }`
            return;
        }

        nativeNameText += `${ nativeName[l].official }, `
        
    })

    return nativeNameText
}