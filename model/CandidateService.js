class CandidateService {
  constructor() {
    this.candidates = [];
    this.nextId = this.candidates.length + 1;
  }

  addCandidate = async ({
    name, surname, email, city, country, avatarUrl
  }) => {
    const newCandidate = {
      id: this.nextId.toString(),
      name,
      surname,
      email,
      city,
      country,
      avatarUrl
    };
    this.candidates.push(newCandidate);
    this.nextId = this.candidates.length + 1;
    return newCandidate;
  };

  updateCandidate = async ({
    id, name, surname, email, city, country, avatarUrl
  }) => {
    let candidate;
    this.candidates = this.candidates.map(candidateItem => {
      if (candidateItem.id === id) {
        candidate = {
          id: candidateItem.id,
          name,
          surname,
          email,
          city,
          country,
          avatarUrl
        };
        return candidate;
      }
      return candidateItem;
    });
    return candidate;
  };

  removeCandidate = async (id) => {
    this.candidates = this.candidates.filter(candidate => candidate.id !== id);
  };

  fetchCandidates = async () => [...this.candidates];

  fetchDetails = async id => this.candidates.find(candidate => candidate.id === id);
}

export default CandidateService;
