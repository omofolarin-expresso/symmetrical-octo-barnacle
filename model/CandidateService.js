class CandidateService {
  constructor() {
    this.candidates = [];
    this.nextId = this.candidates.length + 1;
  }

  addCandidate = async ({
    name, surname, email, city, country, avatarUrl
  }) => {
    try {
      const object = {
        id: `${this.nextId}`, name, surname, email, city, country, avatarUrl
      };
      this.candidates = [...this.candidates, object];
      this.nextId++;
      return object;
    } catch(err){
      console.log(err)
    }
  };

  updateCandidate = async ({
    id, name, surname, email, city, country, avatarUrl
  }) => {
    try {
      const object = { id, name, surname, email, city, country, avatarUrl };
      const index = this.candidates.findIndex((candidate) => candidate.id === id);
      this.candidates[index] = object;
      return object;
    } catch(err){
      console.log(err)
    }
  };

  removeCandidate = async (id) => {
    try {
      this.candidates = this.candidates.filter((candidate) => candidate.id !== id);
      this.nextId--;
      return;
    } catch(err){
      console.log(err)
    }
  };

  fetchCandidates = async () => {
    try {
      return this.candidates;
    } catch(err){
      console.log(err)
    }
  };

  fetchDetails = async id => {
    try {
      const details = this.candidates.find((candidate) => candidate.id === id);
      return details;
    } catch(err){
      console.log(err)
    }
  };
}

export default CandidateService;
