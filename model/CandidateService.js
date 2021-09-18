import AsyncStorage from "@react-native-async-storage/async-storage";

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
        id: this.nextId, name, surname, email, city, country, avatarUrl
      };
      await AsyncStorage.setItem('candidates', JSON.stringify([...this.candidates, object]))
      return object;
    } catch(err){
      console.log(err)
    }
  };

  updateCandidate = async ({
    id, name, surname, email, city, country, avatarUrl
  }) => {
    try {
      const index = this.candidates.findIndex((candidate) => candidate.id === id && candidate.email === email);
      if (index === -1) return;
      this.candidates[index] = { id, name, surname, email, city, country, avatarUrl };
      await AsyncStorage.setItem('candidates', JSON.stringify(this.candidates))
      return { id, name, surname, email, city, country, avatarUrl };
    } catch(err){
      console.log(err)
    }
  };

  removeCandidate = async (id) => {
    try {
      this.candidates = this.candidates.filter((candidate) => candidate.id !== id);
      await AsyncStorage.setItem('candidates', JSON.stringify(this.candidates));
      return;
    } catch(err){
      console.log(err)
    }
  };

  fetchCandidates = async () => {
    try {
      const candidates = await AsyncStorage.getItem('candidates');
      this.candidates = candidates ? JSON.parse(candidates) : [];
      return this.candidates;
    } catch(err){
      console.log(err)
    }
  };

  fetchDetails = async id => {
    try {
    console.log('this.candidates,', this.candidates)
      const details = this.candidates.find((candidate) => candidate.id === id);
      return details;
    } catch(err){
      console.log(err)
    }
  };
}

export default CandidateService;
