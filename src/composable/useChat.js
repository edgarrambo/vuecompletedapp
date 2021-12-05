import { ref } from "vue";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
} from "firebase/firestore";

import { db } from "./useFirebase";
import useAuth from "./useAuth";
import { async } from "@firebase/util";

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

  const sendMessage = async (message) => {
    await addDoc(chatCollection, {
      text: message,
      author: user.value,
      createdAt: new Date(),
    });
  };
  return { messages, unsuscribe, sendMessage };
};

export default useChat;
