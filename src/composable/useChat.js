import { ref } from "vue";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

import { db } from "./useFirebase";
import useAuth from "./useAuth";

const { user } = useAuth();

const messages = ref([]);

const useChat = () => {
  const chatCollection = collection(db, "chat");

  const chatQuery = query(chatCollection, orderBy("createdAt", "desc"));

  const unsuscribe = onSnapshot(chatQuery, (QuerySnapshot) => {
    messages.value = [];
    QuerySnapshot.forEach((doc) => {
      messages.value.push({ id: doc.id, ...doc.data() });
    });
  });
  return { messages, unsuscribe };
};

export default useChat;
