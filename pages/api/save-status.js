import auth0 from "../../lib/auth0";
import { db } from "../../lib/db";
import admin, { auth } from "firebase-admin";

const saveStatus = async (req, res) => {
  const session = await auth0.getSession(req, res);
  if (session) {
    const dados = req.body;
    const today = new Date();
    const currentDate = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
    await db
      .collection("markers")
      .doc(currentDate)
      .collection("checked")
      .doc(session.user.sub)
      .set({
        status: dados.status,
        user: session.user.sub,
        coordinates: new admin.firestore.GeoPoint(
          dados.coords.lat,
          dados.coords.long
        ),
      });
  }
  res.send({ ok: true });
};

export default saveStatus;
