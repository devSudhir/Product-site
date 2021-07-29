export function Contact() {
  return (
    <div>
      <form>
        <div>
          <input type="text" name="firstname" placeholder="Your name.." />
        </div>
        <div>
          <select id="country" name="country">
            <option value="India">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
        </div>
        <div>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
          ></textarea>
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
