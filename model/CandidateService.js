class CandidateService {
  constructor() {
    this.candidates = [];
    this.nextId = this.candidates.length + 1;
  }

  addCandidate = async ({
    name, surname, email, city, country, avatarUrl
  }) => {
    this.candidates.push({ name, surname, email, city, country, avatarUrl, id: String(this.candidates.length + 1) })
    return ({name, surname, email, city, country, avatarUrl, id: String(this.candidates.length)})
  };

  updateCandidate = async ({
    id, name, surname, email, city, country, avatarUrl
  }) => {};

  removeCandidate = async (id) => {};

  fetchCandidates = async () => {
    const candidatesToReturn = []
    console.log('candidates: ', this.candidates)
    this.candidates.forEach(candidate => candidatesToReturn.push({
      name: candidate.name,
      surname: candidate.surname,
      id: candidate.id,
      avatarUrl: candidate.avatarUrl
    }))
    return candidatesToReturn
  };

  fetchDetails = async id => ({});
}

export default CandidateService;
