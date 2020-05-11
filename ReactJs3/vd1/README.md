Life cycle state:
- Initialization:
constructor(props){
      super(props);
      this.state = {
        trangThai:"khoiTao"
      }
    }

- Mounting:
componentWillMount >> render >> componentDidMount

- Updation state:
shouldComponentUpdate (true)  >> componentWillUpdate >> render >> componentDidUpdate
shouldComponentUpdate (false) >> shouldComponentUpdate da chay