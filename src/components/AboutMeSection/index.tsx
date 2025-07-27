const AboutMe = () => {
  const birthDate = new Date(2004, 7, 18); // Months are 0-indexed, so 7 represents August
  const today = new Date();

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  const isBeforeBirthdayThisYear =
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate());
  if (isBeforeBirthdayThisYear) {
    ageYears--;
  }

  const ageMonths =
    ageYears * 12 +
    today.getMonth() -
    birthDate.getMonth() -
    (today.getDate() < birthDate.getDate() ? 1 : 0);
  return (
    <div className="max-w-2xl mx-auto p-4">
      <p className="text-text">
        I'm a passionate software developer with experience in building web
        applications using modern technologies. I love creating intuitive and
        dynamic user experiences. I'm currently {ageMonths} months old (
        {ageYears} years) and very excited about the future of technology.
      </p>
    </div>
  );
};

export default AboutMe;
