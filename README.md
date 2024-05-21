
/******
use the Following Form
********/
                          <div class="row gutters">
															<div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
																<div class="form-group">
																	<label for="counTry">Country</label>
																	<input type="text" value="Ethiopia" disabled class="form-control" >
																</div>
															</div>
															<div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
																<div class="form-group">
																	<label for="state">Region</label>
																	<select name="state" class="form-control" id="State" onchange="populateProvince()">
																		<option value="">Choose Region</option>
																		<option value="oromia">Oromia Regional State</option> 
																		<option value="Afar">Afar Regional State</option>
																		<option value="Amhara">Amhara Regional State</option>
																		<option value="Benishangul-Gumuz">Benishangul-Gumuz Regional State</option> 
																		<option value="Central Ethiopia">Central Ethiopia Regional State </option>
																		<option value="Gambela">Gambela Regional State</option>
																		<option value="Harari">Harari Regional State </option>
																		<option value="Sidama">Sidama Regional State</option> 
																		<option value="Somali">Somali Regional State</option> 
																		<option value="South Ethiopian Peoples">South Ethiopia Regional State</option>
																		<option value="South West Ethiopian Peoples">South West Ethiopia Peoples Regional State</option> 
																		<option value="Tigray">Tigray Regional State</option>
																	</select>
																</div>
															</div>
															<div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
																<div class="form-group">
																	<label for="Zone">Zone / City</label>
																	<select name="Zone"  class="form-control" id="Province" onchange="populateWoreda()">
																		<option value="" disabled  selected="selected"> Choose Zone</option>
																	</select>
																</div>
															</div>
															
															<div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
																<div class="form-group">
																	<label for="Subcity">Subcity</label>
																	<select type="text" name="Subcity" class="form-control" id="Subcity">
																		<option value="" disabled selected="selected">Choose Subcity</option>
																	</select>
																</div>
															</div>

															<div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
																<div class="form-group">
																	<label for="Woreda">Woreda</label>
																	<select type="text" name="Woreda" class="form-control" id="Woreda">
																		<option value="" disabled selected="selected">Choose Woreda</option>
																	</select>
																</div>
															</div>
															<div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
																<div class="form-group">
																	<label for="sTate">City</label>
																	<select type="text" class="form-control" id="woreda" placeholder="Zone">
																		<option value=""></option>
																	</select>
																</div>
															</div>
															<div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
																<div class="form-group">
																	<label for="sTate">Subcity</label>
																	<select type="text" class="form-control" id="woreda">
																		<option value=""></option>
																	</select>
																</div>
															</div>
															<div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
																<div class="form-group">
																	<label for="addrEss">Address</label>
																	<input type="text" class="form-control" id="addrEss" placeholder="Flat No">
																</div>
															</div>
															<div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
																<div class="form-group">
																	<label for="eMail">Email</label>
																	<input type="email" class="form-control" id="eMail" placeholder="Enter email ID">
																</div>
															</div>
															<div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
																<div class="form-group">
																	<label for="phone">Phone</label>
																	<input type="text" class="form-control" id="phone" placeholder="Enter phone number">
																</div>
															</div>
														</div>
