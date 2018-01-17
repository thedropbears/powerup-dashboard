loop {
    check signal from robot
    update animation with degrees 
    if (no signal received for > 1 second) {
        flash warning sign on animation
    }
}