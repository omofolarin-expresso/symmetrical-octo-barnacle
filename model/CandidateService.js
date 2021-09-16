class CandidateService {
  constructor() {
    this.candidates = [];
    this.nextId = this.candidates.length + 1;
  }

  addCandidate = async ({
    name, surname, email, city, country, avatarUrl
  }) => {
    const candidate = {id: `${this.nextId}`, name, surname, email, city, country, avatarUrl}
    this.candidates.push(candidate)
    this.nextId++
    return candidate
  };

  updateCandidate = async ({
    id, name, surname, email, city, country, avatarUrl
  }) => {
    const c = {
      id, name, surname, email, city, country, avatarUrl
    }
    const candidateIndex = this.candidates.findIndex((curr) => curr.id === c.id)
    this.candidates.splice(candidateIndex, 1, c)
    return this.candidates[candidateIndex]
  };

  removeCandidate = async (id) => {
    const candidateIndex = this.candidates.findIndex((curr) => curr.id === id)
    return this.candidates.splice(candidateIndex, 1)
  };

  fetchCandidates = async () => {
    return this.candidates.slice()
  };

  fetchDetails = async id => {
    const candidateIndex = this.candidates.findIndex((curr) => curr.id === id)
    return this.candidates[candidateIndex]
  };
}

export default CandidateService;
