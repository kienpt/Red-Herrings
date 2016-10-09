// grab the mongoose module
var mongoose = require('mongoose');

var ComplaintSchema= new mongoose.Schema({
  "join_key": {type : String, default: ''},
  "case_id": {type : Number, default: 0},
  "trade_nm": {type : String, default: ''},
  "legal_name": {type : String, default: ''},
  "street_addr_1_txt": {type : String, default: ''},
  "cty_nm": {type : String, default: ''},
  "st_cd": {type : String, default: ''},
  "zip_cd": {type : Number, default: 0},
  "naic_cd": {type : Number, default: 0},
  "naics_code_description": {type : String, default: ''},
  "case_violtn_cnt": {type : Number, default: 0},
  "cmp_assd_cnt": {type : Number, default: 0},
  "ee_violtd_cnt": {type : Number, default: 0},
  "bw_atp_amt": {type : Number, default: 0},
  "ee_atp_cnt": {type : Number, default: 0},
  "findings_start_date": {type : String, default: ''},
  "findings_end_date": {type : String, default: ''},
  "flsa_violtn_cnt": {type : Number, default: 0},
  "flsa_repeat_violator": {type : String, default: ''},
  "flsa_bw_atp_amt": {type : Number, default: 0},
  "flsa_ee_atp_cnt": {type : Number, default: 0},
  "flsa_mw_bw_atp_amt": {type : Number, default: 0},
  "flsa_ot_bw_atp_amt": {type : Number, default: 0},
  "flsa_15a3_bw_atp_amt": {type : Number, default: 0},
  "flsa_cmp_assd_amt": {type : Number, default: 0},
  "sca_violtn_cnt": {type : Number, default: 0},
  "sca_bw_atp_amt": {type : Number, default: 0},
  "sca_ee_atp_cnt": {type : Number, default: 0},
  "mspa_violtn_cnt": {type : Number, default: 0},
  "mspa_bw_atp_amt": {type : Number, default: 0},
  "mspa_ee_atp_cnt": {type : Number, default: 0},
  "mspa_cmp_assd_amt": {type : Number, default: 0},
  "h1b_violtn_cnt": {type : Number, default: 0},
  "h1b_bw_atp_amt": {type : Number, default: 0},
  "h1b_ee_atp_cnt": {type : Number, default: 0},
  "h1b_cmp_assd_amt": {type : Number, default: 0},
  "fmla_violtn_cnt": {type : Number, default: 0},
  "fmla_bw_atp_amt": {type : Number, default: 0},
  "fmla_ee_atp_cnt": {type : Number, default: 0},
  "fmla_cmp_assd_amt": {type : Number, default: 0},
  "flsa_cl_violtn_cnt": {type : Number, default: 0},
  "flsa_cl_minor_cnt": {type : Number, default: 0},
  "flsa_cl_cmp_assd_amt": {type : Number, default: 0},
  "dbra_cl_violtn_cnt": {type : Number, default: 0},
  "dbra_bw_atp_amt": {type : Number, default: 0},
  "dbra_ee_atp_cnt": {type : Number, default: 0},
  "h2a_violtn_cnt": {type : Number, default: 0},
  "h2a_bw_atp_amt": {type : Number, default: 0},
  "h2a_ee_atp_cnt": {type : Number, default: 0},
  "h2a_cmp_assd_amt": {type : Number, default: 0},
  "flsa_smw14_violtn_cnt": {type : Number, default: 0},
  "flsa_smw14_bw_amt": {type : Number, default: 0},
  "flsa_smw14_ee_atp_cnt": {type : Number, default: 0},
  "cwhssa_violtn_cnt": {type : Number, default: 0},
  "cwhssa_bw_amt": {type : Number, default: 0},
  "cwhssa_ee_cnt": {type : Number, default: 0},
  "osha_violtn_cnt": {type : Number, default: 0},
  "osha_bw_atp_amt": {type : Number, default: 0},
  "osha_ee_atp_cnt": {type : Number, default: 0},
  "osha_cmp_assd_amt": {type : Number, default: 0},
  "eppa_violtn_cnt": {type : Number, default: 0},
  "eppa_bw_atp_amt": {type : Number, default: 0},
  "eppa_ee_cnt": {type : Number, default: 0},
  "eppa_cmp_assd_amt": {type : Number, default: 0},
  "h1a_violtn_cnt": {type : Number, default: 0},
  "h1a_bw_atp_amt": {type : Number, default: 0},
  "h1a_ee_atp_cnt": {type : Number, default: 0},
  "h1a_cmp_assd_amt": {type : Number, default: 0},
  "crew_violtn_cnt": {type : Number, default: 0},
  "crew_bw_atp_amt": {type : Number, default: 0},
  "crew_ee_atp_cnt": {type : Number, default: 0},
  "crew_cmp_assd_amt": {type : Number, default: 0},
  "ccpa_violtn_cnt": {type : Number, default: 0},
  "ccpa_bw_atp_amt": {type : Number, default: 0},
  "ccpa_ee_atp_cnt": {type : Number, default: 0},
  "flsa_smwpw_violtn_cnt": {type : Number, default: 0},
  "flsa_smwpw_bw_atp_amt": {type : Number, default: 0},
  "flsa_smwpw_ee_atp_cnt": {type : Number, default: 0},
  "flsa_hmwkr_violtn_cnt": {type : Number, default: 0},
  "flsa_hmwkr_bw_atp_amt": {type : Number, default: 0},
  "flsa_hmwkr_ee_atp_cnt": {type : Number, default: 0},
  "flsa_hmwkr_cmp_assd_amt": {type : Number, default: 0},
  "ca_violtn_cnt": {type : Number, default: 0},
  "ca_bw_atp_amt": {type : Number, default: 0},
  "ca_ee_atp_cnt": {type : Number, default: 0},
  "pca_violtn_cnt": {type : Number, default: 0},
  "pca_bw_atp_amt": {type : Number, default: 0},
  "pca_ee_atp_cnt": {type : Number, default: 0},
  "flsa_smwap_violtn_cnt": {type : Number, default: 0},
  "flsa_smwap_bw_atp_amt": {type : Number, default: 0},
  "flsa_smwap_ee_atp_cnt": {type : Number, default: 0},
  "flsa_smwft_violtn_cnt": {type : Number, default: 0},
  "flsa_smwft_bw_atp_amt": {type : Number, default: 0},
  "flsa_smwft_ee_atp_cnt": {type : Number, default: 0},
  "flsa_smwl_violtn_cnt": {type : Number, default: 0},
  "flsa_smwl_bw_atp_amt": {type : Number, default: 0},
  "flsa_smwl_ee_atp_cnt": {type : Number, default: 0},
  "flsa_smwmg_violtn_cnt": {type : Number, default: 0},
  "flsa_smwmg_bw_atp_amt": {type : Number, default: 0},
  "flsa_smwmg_ee_atp_cnt": {type : Number, default: 0},
  "flsa_smwsl_violtn_cnt": {type : Number, default: 0},
  "flsa_smwsl_bw_atp_amt": {type : Number, default: 0},
  "flsa_smwsl_ee_atp_cnt": {type : Number, default: 0},
  "eev_violtn_cnt": {type : Number, default: 0},
  "h2b_violtn_cnt": {type : Number, default: 0},
  "h2b_bw_atp_amt": {type : Number, default: 0},
  "h2b_ee_atp_cnt": {type : Number, default: 0},
  "sraw_violtn_cnt": {type : Number, default: 0},
  "sraw_bw_atp_amt": {type : Number, default: 0},
  "sraw_ee_atp_cnt": {type : Number, default: 0},
  "ld_dt": {type : String, default: ''},
  "complete_address_1": {type : String, default: ''},
  "DCA License Number": {type : String, default: ''},
  "License Type": {type : String, default: ''},
  "License Expiration Date": {type : String, default: ''},
  "License Category": {type : String, default: ''},
  "Business Name": {type : String, default: ''},
  "Business Name 2": {type : String, default: ''},
  "Address Building": {type : String, default: ''},
  "Address Street Name": {type : String, default: ''},
  "Secondary Address Street Name": {type : String, default: ''},
  "Address City": {type : String, default: ''},
  "Address State":{type : String, default: ''},
  "Address ZIP": {type : Number, default: 0},
  "Contact Phone Number": {type : Number, default: 0},
  "Address Borough": {type : String, default: ''},
  "Detail": {type : String, default: ''},
  "Longitude": {type : String, default: ''},
  "Latitude": {type : String, default: ''},
  "complete_address_2": {type : String, default: ''},
  "latlng": {type : String, default: ''},
}, { strict: false })

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Complaint',ComplaintSchema,'Complaint' );