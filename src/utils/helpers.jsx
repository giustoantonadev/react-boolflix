export  const getFlag = (lang) => {

    const langToFlag = {
      en: 'gb',
      ja: 'jp',
      he: 'il',
      zh: 'cn',
      ko: 'kr'
    };

    const flagCode = langToFlag[lang] || lang;
    const supportedFlags = ['it', 'gb', 'fr', 'es', 'de', 'jp', 'us', 'pt', 'cn', 'kr'];

    if (supportedFlags.includes(flagCode)) {
      return <span className={`fi fi-${flagCode}`}></span>;
    }
    return <span>{lang}</span>;
  };

export  const showStars = (vote) => {
    const rating = Math.ceil(vote / 2)
    const stars = []

    for (let i = 1; i <= 5; i++) {

      const starClass = i <= rating ? "fa-solid fa-star" : "fa-regular fa-star"
      stars.push(
        <i key={i} className={starClass} style={{ color: "#FFD43B" }}></i>
      );
    }
    return stars
  }